// initilizing the vue app
const app = Vue.createApp(
    
    {
        data(){
            return {
                hi: 'Hello world',
                show: false,
                x: 0,
                y: 0,
                courses: [
                    {title: "int. to web development", num: "Course number: 62438", credit: "Credits: 4", img:"", isPass: false},
                    {title: "int. to AI", num: "Course number: 62843", credit: "Credits: 3", img:"", isPass: false},
                    {title: "Legal and Ethical Issues II", num: "Course number: 63954", credit: "Credits: 3", img:"", isPass: true}
                ]
            }
        },

        methods: {

            changeTitle() {
                this.hi = "Hello user"
            },

            Toggle() {
                this.show = !this.show;
            },

            handleEvent(e, data) {
                console.log(e, e.type)
                if(data) {
                    console.log(data)
                }

            },

            handleMouse(e){
                this.x = e.offsetX
                this.y = e.offsetY
            }
        },

        computed: {
            filteredCourses() {
                return this.courses.filter((course) => course.isPass)
            }
        }
    }
)

// a div that we wanna control using vue on the ceareApp()
app.mount('#app')



