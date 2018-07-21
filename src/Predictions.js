import React, { Component } from 'react';
import './TodoList.css';

class Predictions extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      date: new Date(),
      premWin: "",
      premLose: "",
      champWin: "",
      champLose: "",
      firstDivWin: "",
      firstDivLose: "",
      secondDivWin: "",
      secondDivLose: "",
      premTeams: ['Arsenal', 'Bournemouth', 'Brighton & Hove Albion', 'Burnley', 'Cardiff City', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Huddersfield Town', 'Leicester City', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle Utd', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham Utd', 'Wolverhampton Wanderers'],
      champTeams: ['Aston Villa', 'Birmingham City', 'Blackburn Rovers', 'Bolton Wanderers', 'Brentford', 'Bristol City','Derby County','Hull City','Ipswich Town','Leeds Utd','Middlesbrough','Millwall','Norwich City','Nottingham Forest','Preston North End','QPR','Reading','Rotherham Utd','Sheffield Utd','Sheffield Wednesday','Stoke City','Swansea City','West Bromwich Albion','Wigan Athletic'],
      firstTeams: ['Accrington Stanley', 'AFC Wimbledon', 'Barnsley', 'Blackpool', 'Bradford City', 'Bristol Rovers','Burton Albion','Charlton Athletic','Coventry City','Doncaster Rovers','Fleetwood Town','Gillingham','Luton Town','Oxford Utd','Peterborough Utd','Plymouth Argyle','Portsmouth','Rochdale','Scunthorpe Utd','Shrewsbury Town','Southend Utd','Sunderland','Walsall','Wycombe Wanderers'],
      secondTeams: ['Bury', 'Cambridge Utd', 'Carlisle Utd', 'Cheltenham Town', 'Colchester Utd', 'Crawley Town','Crewe Alexandra','Exeter City','Forest Green Rovers','Grimsby Town','Lincoln City','Macclesfield Town','Mansfield Town','Milton Keynes Dons','Morecambe','Newport County','Northampton Town','Notts County','Oldham Athletic','Port Vale','Stevenage','Swindon Town','Tranmere Rovers','Yeovil Town']
    };


    this.addItem = this.addItem.bind(this);

  }

  // handleChange = (event) => {
  //   var debt = this._inputElement.value / event.target.value

  //   debt = Math.round(debt*100)/100 

  //   this.setState({ monthlyCost: debt, numberOfMonths: event.target.value })

 

  //   var lastDateNew = new Date()

  //   //testing jan feb march dates

  //   lastDateNew = new Date("2018", "1", "1")

 

  //   if ((lastDateNew.getMonth() + 1) > 3)

  //    {

  //      //2 = March due to zero indexing

  //     var c = new Date(lastDateNew.getFullYear() + 1, "2", "31")

  //     lastDateNew = c

  //    }

  //    else

  //    {

  //     var c = new Date(lastDateNew.getFullYear(), "2", "31")

  //     lastDateNew = c

  //    }

 

  //    var months;
  //    months = (new Date().getFullYear() - lastDateNew.getFullYear()) * 12;
  //    months -= lastDateNew.getMonth() + 1;
  //    months += new Date().getMonth();
     

  //    this.setState({ monthsLeft: months})
  //   this.setState({ lastDate: lastDateNew })

  // };

//   monthDiff(d1, d2) {
    
// };

addItem(e) {
  this.setState({

     name: this._name.value,
     email: this._email.value,
     date: new Date(),
     premWin: this.premWinner.value,
     premLose: this.premLoser.value,
     champWin: this.champWinner.value,
     champLose: this.champLoser.value,
     
     firstDivWin: this.firstDivWinner.value,
     firstDivLose: this.firstDivLoser.value,
     secondDivWin: this.secondDivWinner.value,
     secondDivLose: this.secondDivLoser.value
  });
 e.preventDefault();
}

  render() {

    return (

      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>

            <input ref={(a) => this._name = a}
              placeholder="Name" required id="txtName">
            </input>
&nbsp;
            <input ref={(a) => this._email = a}
              placeholder="Email" required id="txtEmail" size="40">
            </input>
            <hr/>
            <section>
            <strong>Premiership winner</strong>
            <select id="premWinnerx" ref = {(input)=> this.premWinner = input} required>
            <option value=''>Select one</option>
    {this.state.premTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>

             &nbsp; <strong>Premiership loser</strong>
              <select id="premLoser" ref = {(input)=> this.premLoser = input} required>
  <option value=''>Select one</option>
    {this.state.premTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  <hr/>
  <section>
              <strong>Championship winner</strong>
              <select id="champWinner" ref = {(input)=> this.champWinner = input} required>
            <option value=''>Select one</option>
    {this.state.champTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
&nbsp;
              <strong>Championship loser</strong>
              <select id="champLoser" ref = {(input)=> this.champLoser = input} required>
  <option value=''>Select one</option>
    {this.state.champTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  </section>
  <hr/>
  <section>
              <strong>First div winner</strong>
              <select id="firstDivWinner" ref = {(input)=> this.firstDivWinner = input} required>
            <option value=''>Select one</option>
    {this.state.firstTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>

&nbsp;
              <strong>First div loser</strong>
              <select id="firstDivLoser" ref = {(input)=> this.firstDivLoser = input} required>
  <option value=''>Select one</option>
    {this.state.firstTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  </section>
<hr/>
  <section>
              <strong>Second div winner</strong>
              <select id="secondDivWinner" ref = {(input)=> this.secondDivWinner = input} required>
            <option value=''>Select one</option>
    {this.state.secondTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  &nbsp;
              <strong>Second div loser</strong>
              <select id="secondDivLoser" ref = {(input)=> this.secondDivLoser = input} required>
  <option value=''>Select one</option>
    {this.state.secondTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  </section>



</section>

<button type="submit">Apply</button>
          </form>

        </div>

        <div>


          <section id="SendThis" style={{border:1}}>
          <h3>Send this</h3>
          Name: {this.state.name} <br/>
          Email: {this.state.email} <br/>
          Date :
          {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(this.state.date)}

        <h3>Premiership Winner</h3>
        {this.state.premWin}
        <h3>Premiership Loser</h3>
        {this.state.premLose}
        <h3>Championship Winner</h3>
        {this.state.champWin}
        <h3>Championship Loser</h3>
        {this.state.champLose}  
        <h3>First Division Winner</h3>
        {this.state.firstDivWin}
        <h3>First Division Loser</h3>
        {this.state.firstDivLose}
        <h3>Second Division Winner</h3>
        {this.state.secondDivWin}
        <h3>Second Division Loser</h3>
        {this.state.secondDivLose}

        </section>
          </div>

      </div>

    );

  }

};

 

export default Predictions;