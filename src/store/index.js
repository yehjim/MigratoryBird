import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        login: false,
        test: '測試',
        hostcheck: false,
        langdisplay: 'none',
        editmode: false,
        hashouse: false,
        houseid: 0,
        checkindata: {
            checkin: '123132',
            checkout: ''
        },
        username: '',
        userdata: {
            houseid: '',
            username: '',
            needid: null

        },
        posthousedata: {
            city: "",
            area: "",
            address: "",
            house_describe: "",
            type: '',
            square: 0,
            stair: 0,
            year: '',
            deposit: 0,
            monthly: 0,
            live_number: 0,
            is_bargain: null,
            registration: null,
            totalstair: 0,
            ad: null,
            adtype: '超級刊登',
            fee: [],
            fur: [],
            life_function: [],
            rule: '',
            gender: '',
            pet: null,
            open_fire: null,
            houseowner_id: null,
            foreigner_id: null


        },
        bookingRecord: {
            rent_out_record_id: '',
            house_id: '',
            foreigner_id: '',
            rent: '',
            record_year: "",
            record_date: "",
            start_date: "",
            deposit: null,
            end_date: "",
            live: null,
            live_total: null,
            city: "",
            area: "",
            address: "",
            user_profile: {
                living_habit: "",
                hobby_in_leisure_time: "",
                stay_reason: "",
                to_do_list: "",
                smoke: "",
                drink: "",
                medicine: ""
            },
            mbs_fee: null,
            pay_money: null,
            is_pay: true,
            createdAt: null,
            pay_info: null
        },
        searchdata: {
            city: '',
            area: '',
            key: '',



        },
        my_house: {
            house_id: null,
            status: "",
            rent_out_record_id: null
        },
        foreignerlist: [],
        editdata: {},
        editobj: {},
        siginindata: {},
        hosthousedata: {}

    },
    mutations: {
        logincheck(state) {
            state.login = true
        },
        signincheck(state) {
            state.login = true
        },
        logoutcheck(state) {
            state.login = false
        },
        hostcheck(state) {
            state.hostcheck = true;
        },
        landrodcheck(state) {
            state.hostcheck = false
        },
        diplaylangmodal(state) {
            state.langdisplay = "block"
        },
        closelangmodal(state) {
            state.langdisplay = "none"
        },
        setuserdata(state, userdata) {
            state.userdata = userdata;
        },
        setbookingdata(state, datedata) {
            state.bookingRecord.start_date = datedata.start_date
            state.bookingRecord.end_date = datedata.end_date
        },
        setuserneedid(state, needid) {
            state.userdata[0].needid = needid

        },
        posthouseidtouser(state, id) {
            state.houseid = id;
        },
        posthousestatus(state, hashouse) {
            state.hashouse = hashouse;
        },
        setpostlocdata(state, locdata) {
            state.posthousedata.city = locdata.city
            state.posthousedata.area = locdata.area
            state.posthousedata.address = locdata.add
        },
        updatelikelist(state, likeitem) {
            state.userdata[0].likelist.push(likeitem);

        },
        delelikelist(state, likeitem) {
            let likelist = state.userdata[0].likelist
            let index = likelist.indexOf(likeitem)
            likelist.splice(index, 1);
        },
        setsearchdata(state, searchdata) {
            state.searchdata.city = searchdata.city
            state.searchdata.area = searchdata.area
            state.searchdata.key = searchdata.key

        },
        setsigninuserdata(state, signindata) {
            state.siginindata = signindata
        },
        setfeturedata(state, feturedata) {
            state.posthousedata.type = feturedata.type
            state.posthousedata.square = feturedata.square
            state.posthousedata.stair = feturedata.stair
            state.posthousedata.year = feturedata.year
            state.posthousedata.deposit = feturedata.deposit
            state.posthousedata.monthly = feturedata.monthly
            state.posthousedata.live_number = feturedata.live_number
            state.posthousedata.is_bargain = feturedata.is_bargain
            state.posthousedata.registration = feturedata.registration
            state.posthousedata.totalstair = feturedata.totalstair
            state.posthousedata.fee = feturedata.fee

        },
        sethousedescribe(state, describedata) {
            state.posthousedata.house_describe = describedata.house_describe;
            state.posthousedata.rule = describedata.rule
        },
        setfeturetwodata(state, feturedata) {
            state.posthousedata.gender = feturedata.gender;
            state.posthousedata.life_function = feturedata.life_function
            state.posthousedata.fur = feturedata.fur;
            state.posthousedata.pet = feturedata.pet;
            state.posthousedata.open_fire = feturedata.open_fire
        },
        setforeignerid(state) {
            state.posthousedata.foreigner_id = state.userdata[0].id;
        },
        setadtype(state, addata) {
            state.posthousedata.ad = addata.ad;
            state.posthousedata.adtype = addata.adtype;
            state.posthousedata.houseowner_id = state.userdata[0].id;

        },
        // setmyhousedata(state){
        //     state.my_house.house_id = state
        // },
        seteditdata(state, data) {
            state.editdata = data;
        },
        checkeditdata(state) {
            let editobj = {};
            for (let key in state.editobj) {
                delete state.editobj[key];
            }
            for (var key in state.editdata[0]) {

                if (state.posthousedata[key] == '' || state.posthousedata[key] == null) {
                    // console.log('無更改', key, state.posthousedata[key])
                    continue;

                } else {

                    editobj[key] = state.posthousedata[key];
                    console.log('有更改', editobj[key])

                    // return false
                }
            }
            state.editobj = editobj;
            // console.log('新的物件', editobj)
        },
        cleareditobj(state) {
            for (let key in state.editobj) {
                delete state.editobj[key];
            }

        },
        updatebookingdata(state, newdata) {
            state.bookingRecord.deposit = newdata.deposit;
            state.bookingRecord.monthly = newdata.monthly;
            state.bookingRecord.live_number = newdata.live_number;
            state.bookingRecord.address = newdata.address;
            state.bookingRecord.city = newdata.city;
            state.bookingRecord.area = newdata.area;
        }
    },
    actions: {
        GETLIST(context) {
            console.log(context)
            return axios.get('http://localhost:7000/Items').then(res => {
                context.commit('SETLIST', res.data);
            })
        },
        getloginstatus() {
            return this.state.login
        },
        GETUSERDATA(context) {
            console.log(context)
            let username = this.state.userdata.username
            this.state.username = this.state.userdata.username;
            axios.get(`http://localhost:7000/user/?username=${username}`).then(res => {
                console.log(res.data);
                context.commit('setuserdata', res.data)
            })
        },
        POSTHOUSERDATA(context) {
            // console.log(context.state.posthousedata);
            context.state.posthousedata.houseowner_id = context.state.userdata[0].id;
            axios.post('http://localhost:7000/housedetail', context.state.posthousedata)
                .then(res => {
                    context.state.my_house.house_id = res.data.id;
                    context.state.houseid = res.data.id;
                    console.log(res.data.id);
                })
        },
        POSTNEEDID(context, needid) {
            // let needid = context.state.userdata.needid
            let userid = context.state.userdata[0].id;
            console.log(userid)
            axios.patch(`http://localhost:7000/user/${userid}`, {
                    needid: needid
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });
        },
        POSTBOOKHOUSEINFO(context) {
            let hashouse = context.state.hashouse;
            let houseid = context.state.houseid
            context.state.userdata[0].hashouse = context.state.hashouse;
            context.state.userdata[0].houseid = context.state.houseid;
            let userid = this.state.userdata[0].id;
            axios.patch(`http://localhost:7000/user/${userid}`, {
                    hashouse: hashouse,
                    houseid: houseid
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });

        },
        POSTBOOKINGRECORD(context) {
            context.state.bookingRecord.house_id = context.state.houseid
            context.state.bookingRecord.foreigner_id = context.state.userdata[0].id;
            let bookdata = context.state.bookingRecord;
            axios.post('http://localhost:7000/bookingRecord', bookdata)
                .then(res => {
                    console.log('post訂房資料成功', res.data.id);
                })

        },
        GETEDITDATA(context) {
            let userid = this.state.userdata[0].id;
            axios.get(`http://localhost:7000/housedetail?houseowner_id=${userid}`).then(res => {
                console.log(res.data);
                context.commit('seteditdata', res.data)
            })
        },
        PATCHEDITDATA(context) {
            // console.log('有盡vuex')
            let houseid = this.state.editdata[0].id;
            context.commit('checkeditdata');
            console.log('PATCH的資料', context.state.editobj)
            axios.patch(`http://localhost:7000/housedetail/${houseid}`, context.state.editobj)
                .then(res => {
                    console.log(res.data, 'PATCH成功了');
                    // context.commit('seteditdata', res.data)
                })
        },
        GETHOUSEDATA(context) {
            let userid = this.state.userdata[0].id;
            axios.get(`http://localhost:7000/housedetail?houseowner_id=${userid}`)
                .then((res) => {
                    context.state.foreignerlist = res.data[0].foreigner_id
                    context.state.hosthousedata = res.data[0]
                    console.log(res.data[0].foreigner_id)

                }).catch((err) => {
                    console.log(err)

                })
        }
    },
    modules: {}
})