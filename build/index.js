(function () {
'use strict';

function GameState(game) {
    console.log("Starting the game");
}

GameState.prototype = {
    preload: function preload() {
        console.log("Preloading");
    },
    create: function create() {
        console.log("Creating");
    }
};

var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");

game.state.add("GameState", GameState);
game.state.start("GameState");

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZXMvZ2FtZVN0YXRlLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEdhbWVTdGF0ZShnYW1lKXtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHRoZSBnYW1lXCIpO1xufTtcblxuR2FtZVN0YXRlLnByb3RvdHlwZSA9IHtcbiAgICBwcmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZWxvYWRpbmdcIik7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmdcIik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi9zdGF0ZXMvZ2FtZVN0YXRlLmpzXCI7XG5cbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDMyMCwgNDgwLCBQaGFzZXIuQ0FOVkFTLCBcImdhbWVcIik7XG5cbmdhbWUuc3RhdGUuYWRkKFwiR2FtZVN0YXRlXCIsR2FtZVN0YXRlKTtcbmdhbWUuc3RhdGUuc3RhcnQoXCJHYW1lU3RhdGVcIik7XG4iXSwibmFtZXMiOlsiR2FtZVN0YXRlIiwiZ2FtZSIsImxvZyIsInByb3RvdHlwZSIsIlBoYXNlciIsIkdhbWUiLCJDQU5WQVMiLCJzdGF0ZSIsImFkZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7QUFBTyxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF3QjtZQUNuQkMsR0FBUixDQUFZLG1CQUFaOzs7QUFHSkYsVUFBVUcsU0FBVixHQUFzQjthQUNULG1CQUFVO2dCQUNQRCxHQUFSLENBQVksWUFBWjtLQUZjO1lBSVYsa0JBQVU7Z0JBQ05BLEdBQVIsQ0FBWSxVQUFaOztDQUxSOztBQ0ZBLElBQUlELE9BQU8sSUFBSUcsT0FBT0MsSUFBWCxDQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQkQsT0FBT0UsTUFBakMsRUFBeUMsTUFBekMsQ0FBWDs7QUFFQUwsS0FBS00sS0FBTCxDQUFXQyxHQUFYLENBQWUsV0FBZixFQUEyQlIsU0FBM0I7QUFDQUMsS0FBS00sS0FBTCxDQUFXRSxLQUFYLENBQWlCLFdBQWpCOzs7OyJ9