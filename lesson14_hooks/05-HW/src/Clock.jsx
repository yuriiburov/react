import React, { useEffect, useState } from 'react';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;

  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(
    getTimeWithOffset(offset).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
      second: 'numeric',
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        getTimeWithOffset(offset).toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
          second: 'numeric',
        })
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       time: this.getTimeWithOffset(this.props.offset).toLocaleTimeString(
//         'en-US',
//         {
//           hour: 'numeric',
//           hour12: true,
//           minute: 'numeric',
//           second: 'numeric',
//         }
//       ),
//     };
//   }

//   getTimeWithOffset = (offset) => {
//     const currentTime = new Date();
//     const utcOffset = currentTime.getTimezoneOffset() / 60;

//     return new Date(
//       currentTime.setHours(currentTime.getHours() + offset + utcOffset)
//     );
//   };

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         time: this.getTimeWithOffset(this.props.offset).toLocaleTimeString(
//           'en-US',
//           {
//             hour: 'numeric',
//             hour12: true,
//             minute: 'numeric',
//             second: 'numeric',
//           }
//         ),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.time}</div>
//       </div>
//     );
//   }
// }

export default Clock;
