enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let test: Status.Ready = Status.Ready;
test = 111;
test = Status.Waiting;  