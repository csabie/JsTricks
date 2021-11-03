var c={
  name:'jay',
  say(){return function(){console.log(this.name)}}
}
c.say()()