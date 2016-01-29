angular.module('examples')
  .directive('liteList', function (liteList) {
    function setStyles(ul : angular.IAugmentedJQuery) {
      ul.css({
        border: '1px #ccc solid', 
        maxHeight: '30px', 
        width: '100px',
        overflowY: 'scroll'
      });
    }
    function setEvents(ul : angular.IAugmentedJQuery, scope : angular.IScope) {
      /*
      ul.on('scroll', function (e : JQueryEventObject) {
      });
      */

      var prev : number = null;

      function animLoop(render : (deltaT: number) => boolean, element : Element) {
        var running : boolean;
        var lastFrame : number = +new Date;
        function loop(now : number) {
          // stop the loop if render returned false
          if (running !== false) {
            requestAnimationFrame(loop);//, element);
            var deltaT = now - lastFrame;
            // do not render frame when deltaT is too high
            if (deltaT < 160) {
              running = render(deltaT);
            }
            lastFrame = now;
          }
        }
        loop(lastFrame);
      }

      animLoop(function (deltaT : number) {
        var ulTop = ul[0].getBoundingClientRect().top;
        var li = ul[0].querySelector('li');
        if (!li) {
          return true;
        } else {
          var liTop = li.getBoundingClientRect().top;
          liteList.update(ulTop, liTop, function () {
            scope.$apply();
          });
          return true;
        }
      }, ul[0]);

    }
    return {
      restrict: 'E',
      controllerAs: 'liteList',
      controller: function (liteList : any) {
        return {
          state: liteList.state
        };
      },
      templateUrl: 'app/navigation/lite-list/lite-list.html',
      link: function (scope : angular.IScope, element : angular.IAugmentedJQuery) {
        var ul = element.find('ul');
        setStyles(ul);
        setEvents(ul, scope);
      }
    }
  });

