module.exports = io => {
  var line_history = [];
  io.on('connection', socket => {
    console.log('new user connected');
    for(let i in line_history){
      socket.emit('drawline', {line: line_history[i]});
    }

    socket.on('drawline', data => {
      line_history.push(data.line);
      io.emit('drawline', data);
    });
  });
}
