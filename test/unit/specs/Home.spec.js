import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('deberia renderizar correctamente', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container-dock h1').textContent)
      .toEqual('Hello World!')
  });
})
