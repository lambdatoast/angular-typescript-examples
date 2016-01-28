angular.module('examples')
  .factory('liteList', function () {
    var state : { head: string[], middle: string[] } = {
      head : [],
      middle : ['a', 'b', 'c', 'd', 'e']
    };
    var fwdAllowed : boolean = true;

    function forward(callback : () => void) { 
      if (fwdAllowed) {
        state.head = state.middle.slice(0,1); 
        state.middle = state.middle.slice(1);
        callback();
      }
      fwdAllowed = false;
    }

    function rewind() { 
      state.middle = state.head.concat(state.middle); 
      state.head = []; 
      fwdAllowed = true;
    }

    return {
      state: state,
      rewind: rewind,
      forward: forward
    };
  });

