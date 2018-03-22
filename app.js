/*
 * Vue.js
 */
Vue.component(`material-nav`, {
    template: `<nav>
    <div class="nav-wrapper red">
      <a class="brand-logo center">Prawa i Obowiązki</a>
    </div>
  </nav>`
});

Vue.component(`item`, {
    props: [`title`, `content`],
    template: `<div class="item">
        <div class="line"></div>
        <div class="card-panel red darken-2">
            <div class="white-text">
                <span class="card-title">{{title}}</span>
                <p>{{content}}</p>
            </div>
        </div>
    </div>`
});

Vue.component(`item-cluster`, {
    props: [`title`, `clusterType`, `toggle`, `callback`, `active`, `closeLaws`, `closeObligations`],
    template: `
    <div v-if="clusterType == 'law'">
        <div class="cluster card-panel red darken-1" v-on:click="callback" v-if="toggle == 'laws' || toggle == ''" style="heigth: 10em">
            <div class="card-content white-text scorll">
                <h5>{{title.toUpperCase()}}</h5>
                <div v-if="clusterType == 'law' && toggle == 'laws'" v-for="law in laws">
                    <item v-bind:title="law.title" v-bind:content="law.content"></item>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="cluster card-panel red darken-1" v-on:click="callback" v-if="toggle == 'obligations' || toggle == ''" style="heigth: 10em">
            <div class="card-content white-text">
                <h5>{{title.toUpperCase()}}</h5>
                <div v-if="clusterType == 'obligation' && toggle == 'obligations'" v-for="obligation in obligations">
                    <item v-bind:title="obligation.title" v-bind:content="obligation.content"></item>
                </div>
            </div>
        </div>
    </div>`,
    data: function (){  
        return {
            laws: Assets.Laws,
            obligations: Assets.Obligations
        }
    }
});

new Vue({
    el: `#app-root`,
    data: {
        toggle: ``,
        laws: true,
        obligations: true
    },
    methods: {
        toggleLaws: function (){
            if(this.laws){
                this.toggle = `laws`;
                this.laws = !this.laws;
            }
            else{
                this.laws = !this.laws;
                this.toggle = ``;
            }
        },
        toggleObligations: function(){
            if(this.obligations){
                this.toggle = `obligations`;
                this.obligations = !this.obligations;
            }
            else{
                this.obligations = !this.obligations;
                this.toggle = ``;
            }
        }
    }
}) 