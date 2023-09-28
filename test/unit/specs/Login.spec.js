import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main p').textContent)
      .toEqual('Bienvenido, por favor ingrese sus datos')
  });
})
