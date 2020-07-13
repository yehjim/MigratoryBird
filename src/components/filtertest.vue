<template>
    <div>
        <!-- <input type="text" v-model="ischeck"> -->
        <div class="container" id="people">
            <div class="row">
                <div class="col-6">
                    <ul class="people-list">
                        <div v-for="(item,index) in filterItems" :key="index">
                            <Item :loc="item.loc" :area=item.area :gender=item.gender></Item>
                        </div>
                    </ul>
                </div>
                <div class="col-6">
                    <div class="filter">
                        <label><input type="radio" v-model="selecteditems" value="All" /> All</label>
                        <label><input type="radio" v-model="selecteditems" value="Taipei" /> Taipei</label>
                        <label><input type="radio" v-model="selecteditems" value="new taipei" /> new taipei</label>
                        <label><input type="radio" v-model="selecteditems" value="hulien" /> hulien</label>
                    </div>
                    <div class="dropdownmenu">
                        <Dropdown datatype="Gender" :cata=Genders @custom-event-trigger="show"></Dropdown>
                        <span>這是{{gendertype}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">

</script>

<script>
import Item from '../components/Item'
import Dropdown from '../components/Dropdown'
import CheckBox from '../components/CheckBox'

export default {
    data() {
        return {
            people: [
                { name: "Bill Gates", category: "Tech" },
                { name: "Steve Jobs", category: "Tech" },
                { name: "Jeff Bezos", category: "Tech" },
                { name: "George Clooney", category: "Entertainment" },
                { name: "Meryl Streep", category: "Entertainment" },
                { name: "Amy Poehler", category: "Entertainment" },
                { name: "Lady of Lórien", category: "Fictional" },
                { name: "BB8", category: "Fictional" },
                { name: "Michael Scott", category: "Fictional" }
            ],
            selectedCategory: "All",
            filtersitems: [
                { loc: 'Taipei', area: '11', gender: 'male' },
                { loc: 'Taipei', area: '33', gender: 'female' },
                { loc: 'Taipei', area: '999', gender: 'male' },
                { loc: 'Taipei', area: '19231023173', gender: 'female' },
                { loc: 'hulien', area: '22', gender: 'male' },
                { loc: 'new taipei', area: '33', gender: 'male' }
            ],
            selecteditems: "All",
            Genders: [{
                    hex: '#00759A',
                    name: 'All'
                },
                {
                    hex: '#00759A',
                    name: 'male'
                },
                {
                    hex: '#F7941D',
                    name: 'female'
                }
            ],
            gendertype: 'All'
        }
    },
    mounted() {},
    components: {
        Item,
        Dropdown,
        CheckBox
    },
    methods: {
        show(gender) {
            this.gendertype = gender;
        },
    },

    computed: {
        filteredPeople: function() {
            var vm = this;
            var category = vm.selectedCategory;
            var gendercategory = vm.gendertype;

            if (category === "All") {
                return vm.people;
            } else {
                return vm.people.filter(function(person) {
                    return person.category === category;
                });
            }
        },
        filterItems: function() {
            var vm = this;
            var loc = vm.selecteditems;
            var gender = vm.gendertype;
            if (loc === "All" && gender === "All") {
                return vm.filtersitems;
            } else if (loc === "All") {
                return vm.filtersitems.filter(function(item) {
                    return item.gender === gender;
                });
            } else if (gender === "All") {
                return vm.filtersitems.filter(function(item) {
                    return item.loc === loc;
                });
            } else {
                return vm.filtersitems.filter(function(item) {
                    return item.loc === loc && item.gender === gender;
                });
            }
        }
        // return item.loc === loc && item.gender === gender || item.loc === loc && item.gender === "All"|| item.loc === "All" && item.gender === gender;
        // filterItems: function() {
        //     var vm = this;
        //     var loc = vm.selecteditems;
        //     if (loc === "All") {
        //         return vm.filtersitems;
        //     } else {
        //         return vm.filtersitems.filter(function(item) {
        //             return item.loc === loc;
        //         });
        //     }
        // }
    }
}
</script>

<style lang="scss">
.container {
    padding: 20px;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    line-height: 1.5em;
}

ul {
    margin-left: 0;
    padding-left: 0;
    list-style: none;
}

li {
    padding: 8px 16px;
    border-bottom: 1px solid #eee;
}

* {
    box-sizing: border-box;
    font-family: "Arial";
}
</style>