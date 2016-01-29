angular.module('examples')
  .factory('liteList', function () {
    var s : { head: string[], middle: string[], tail: string[] } = {
      head : [],
      middle : "abcdefghijklmnopqrstuvwxyz".split(''),
      tail : []
    };

    function up() { 
      s.head = s.head.concat(s.middle.slice(0,1)); 
      s.middle = s.middle.slice(1).concat(s.tail.slice(0,1));
      s.tail = s.tail.slice(1);
    }

    function down() { 
      s.tail = s.middle.slice(-1).concat(s.tail);
      s.middle = s.head.slice(-1).concat(s.middle.slice(0,-1));
      s.head = s.head.slice(0,-1);
    }

    function noop() {}

    var lastPos : number;

    function op(y1 : number, y2 : number) : () => void {
      var pivot = lastPos === undefined ? y1 : lastPos;
      return y2 < pivot ? up : y2 > pivot ? down : noop;
    }

    function update(y1 : number, y2 : number, f : () => void) {
      var changedEnough = lastPos === undefined || (Math.abs(lastPos-y2) > 10);
      if (s.middle.length < 5 || y2 === lastPos || !changedEnough) {
        return;
      }
      op(y1, y2)();
      lastPos = y2;
      f();
    }

    return {
      state: s,
      update: update
    };
  });

