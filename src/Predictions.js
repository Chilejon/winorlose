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
      scotchWin: "",
      scotchLose:"",
      premTeams: ['Aston Villa',
       'Arsenal', 'Bournemouth', 'Brighton & Hove Albion',
        'Burnley', 'Chelsea', 'Crystal Palace', 
        'Everton', 'Fulham',  'Leicester City',
         'Liverpool', 'Man City', 'Man Utd',
          'Newcastle Utd', 'Norwich City', 'Sheff Utd',
           'Southampton', 'Tottenham Hotspur', 'Watford',
            'West Ham Utd', 'Wolverhampton Wanderers'],
      champTeams: [ 'Birmingham City', 'Blackburn Rovers', 'Barnsley', 
      'Brentford', 'Bristol City', 'Cardiff City',
      'Huddersfield Town','Derby County','Hull City',
      'Leeds Utd', 'Luton Town','Middlesbrough',
      'Millwall','Norwich City','Nottingham Forest',
      'Preston North End','QPR','Reading',
      'Sheffield Wednesday','Stoke City','Swansea City',
      'West Bromwich Albion','Wigan Athletic'],
      firstTeams: ['Accrington Stanley', 'Bolton', 'Bury',
       'AFC Wimbledon', 'Blackpool',  'Bristol Rovers',
       'Burton Albion', 'Gillingham', 'Fleetwood Town',
        'Ipswich Town','Doncaster Rovers','Oxford Utd',
        'MK Dons', 'Peterborough Utd', 'Rotherham Utd',
        'Portsmouth','Rochdale', 'Coventry',
        'Shrewsbury Town','Southend Utd','Sunderland',
        'Tranmere Rovers','Wycombe Wanderers'],
      secondTeams: ['Bradford','Cambridge Utd', 'Carlisle Utd',
       'Cheltenham Town', 'Colchester Utd', 'Crawley Town',
       'Crewe Alexandra','Exeter City','Forest Green Rovers',
       'Grimsby Town','Leyton Orient','Macclesfield Town',
       'Mansfield Town','Morecambe', 'Scunthorpe',
       'Newport County','Northampton Town','Plymouth Argyle',
       'Oldham Athletic','Port Vale','Stevenage', 'Salford City',
       'Swindon Town', 'Walsall'],
      scotchTeams: ['Aberdeen','Celtic', 'Hamilton',
       'Hearts','Hibernian', 'Kilmarnock',
        'Livingston', 'Motherwell', 'Rangers',
        'Ross County','St Johnstone','St Mirren']
    };


    this.addItem = this.addItem.bind(this);

  }

  

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
     secondDivLose: this.secondDivLoser.value,
     scotchWin: this.scotchWinner.value,
     scotchLose: this.scotchLoser.value
  });
 e.preventDefault();
}

  render() {

    return (
      
      <div className="todoListMain">
      <h1>Win or Lose - Your predictions</h1>
<a href="#rules">Go to Rules</a>
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
            <section className="middleText">
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
  </section>
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
  <hr/>
  <section>
              <strong>Scottish winner</strong>
              <select id="scotchWinner" ref = {(input)=> this.scotchWinner = input} required>
            <option value=''>Select one</option>
    {this.state.scotchTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  &nbsp;
              <strong>Scottish loser</strong>
              <select id="scotchLoser" ref = {(input)=> this.scotchLoser = input} required>
  <option value=''>Select one</option>
    {this.state.scotchTeams.map(team =>
      <option value={team}>{team}</option>
    )};
  </select>
  </section>



</section>

<button type="submit">Submit...</button>
          </form>

        </div>

        <div>


          <section id="SendThis" style={{border:1}}>
          <h2>Your details</h2>
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
        <h3>Scottish Winner</h3>
        {this.state.scotchWin}
        <h3>Scottish Loser</h3>
        {this.state.scotchLose}

        </section>

<aside>
<h2 class="redText">IMPORTANT</h2>  
<h3>
  Copy and paste the next line into an email to jon.chiles( at )Stockport.gov.uk
</h3>
<p class="redText">
          #{this.state.name}* #{this.state.email}* #{this.state.premWin}* #{this.state.premLose}* #{this.state.champWin}* #{this.state.champLose}* #{this.state.firstDivWin}* #{this.state.firstDivLose}* #{this.state.secondDivWin}* #{this.state.secondDivLose}* #{this.state.scotchWin}* #{this.state.scotchLose}*
</p>
</aside>

<aside>
<h2 id="rules">Rules/Instructions</h2>

<p>
  Enter your full name, email address.
  Now choose who you think will win and lose each of the 5 main divisions in the UK.
  Click Submit...  this will generate a snippit of text above in red. Cut and paste only this line in an email to me.
  On submission of the email you then owe the competition £5. 
</p>
<p>
  After the leagues have finished in 2020 the scores will be counted as follows.
  If you correctly get the winner from each division you get a single point each.
  Same goes for the loser. Get that spot on it's a point awarded. 
  If you predicted Chelsea to win and they finish 4th then you get 4 points. 
  If you predicted West Ham to lose and they come 10th. You get 11 points.
  </p>
  <p>
  The aim of the game is to get the least points. 10 being the lowest.    
        Should the same points be awarded to more than one person, you'll share the pot.
  All entries must be emailed to me by 4th of Aug.
  There will be a link to the full predictions sent out.     
  

</p>

</aside>




          </div>

      </div>

    );

  }

};

 

export default Predictions;