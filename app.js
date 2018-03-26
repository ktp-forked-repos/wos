/*
 * Vue.js
 */
Vue.component(`material-nav`, {
    template: `<nav>
    <div class="nav-wrapper red">
      <a class="brand-logo center"><h5 class="truncate">Prawa i obowiązki obywateli w państwie demokratycznym</h5></a>
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
    props: [`title`, `clusterType`, `toggle`, `callback`],
    template: `
    <div v-if="clusterType == 'law'">
        <div class="cluster card-panel red darken-1 hoverable" v-on:click="callback">
            <div class="card-content white-text scorll">
                <h5>{{title.toUpperCase()}}</h5>
                <div v-if="clusterType == 'law' && toggle == 'laws'" v-for="law in laws">
                    <item v-bind:title="law.title" v-bind:content="law.content"></item>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="clusterType == 'obligation'">
        <div class="cluster card-panel red darken-1 hoverable" v-on:click="callback">
            <div class="card-content white-text">
                <h5>{{title.toUpperCase()}}</h5>
                <div v-if="clusterType == 'obligation' && toggle == 'obligations'" v-for="obligation in obligations">
                    <item v-bind:title="obligation.title" v-bind:content="obligation.content"></item>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="clusterType == 'constitution'">
        <div class="cluster card-panel red darken-1" v-on:click="callback">
            <div class="card-content white-text">
                <h5>{{title.toUpperCase()}}</h5>
                <div v-if="clusterType == 'constitution' && toggle == 'constitution'" v-for="item in constitution">
                    <item v-bind:title="item.title" v-bind:content="item.content"></item>
                </div>
            </div>
        </div>
    </div>`,
    data: function (){  
        return {
            laws: Assets.Laws,
            obligations: Assets.Obligations,
            constitution: Assets.Constitution
        }
    }
});

new Vue({
    el: `#app-root`,
    data: {
        toggle: ``,
        fullscreen: false
    },
    methods: {
        toggleLaws: function (){
            if(this.laws){
                this.toggle = `laws`;
                this.laws = !this.laws;
                this.fullscreen = true;
            }
            else{
                this.laws = !this.laws;
                this.toggle = ``;
                this.fullscreen = false;                
            }
        },
        toggleObligations: function(){
            if(this.obligations){
                this.toggle = `obligations`;
                this.obligations = !this.obligations;
                this.fullscreen = true;                
            }
            else{
                this.obligations = !this.obligations;
                this.toggle = ``;
                this.fullscreen = false;                
            }
        },
        toggleConstitution: function(){
            if(this.obligations){
                this.toggle = `constitution`;
                this.obligations = !this.obligations;
                this.fullscreen = true;                
            }
            else{
                this.obligations = !this.obligations;
                this.toggle = ``;
                this.fullscreen = false;                
            }
        }
    }
}) 