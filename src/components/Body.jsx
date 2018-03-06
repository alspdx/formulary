import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import AccountForm from './AccountForm';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route, Redirect } from 'react-router-dom';
import glamorous from 'glamorous';
import Header from './Header';

const Container = glamorous.div({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const SwitchWrap = glamorous.div({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userDetails: {
        userName: 'Adam Smith',
        email: 'alspdx@gmail.com',
        clientIds: [
          123,
          23453,
          123121,
          6445,
          324545,
          5674,
          2342,
          12345
        ],
        serviceIds: [
          9456,
          94523,
          234354,
          544532,
          34567,
          23454,
          1245,
          6755,
          4567,
          3456,
          888,
          444,
          5674,
          2345,
          123,
          321,
          2534,
          6345,
          12345666,
          645
        ],
      },
      clientsById: {
        123: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        23453: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        123121: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        6445: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        324545: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        5674: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        2342: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        },
        12345: {
          firstName: 'FirstName',
          lastName: 'LastName',
          phoneNumber: '123-456-7890',
          email: 'email@isp.com',
          birthday: 'December 25th',
          clientSince: '05/24/2016',
          notes: 'This is a client who gets cut and color, referred by Jane Doe.',
          stylistId: '1',
          serviceIds: [
            9456,
            94523,
            234354,
            544532,
            34567,
            23454,
            1245,
            6755,
            4567,
            3456,
            888,
            444,
            5674,
            2345,
            123,
            321,
            2534,
            6345,
            12345666,
            645
          ]
        }
      },
      formDetails: {
        register: {
          inputs: [
            {
              inputType: 'text',
              labelText: 'Username'
            },
            {
              inputType: 'email',
              labelText: 'Email'
            },
            {
              inputType: 'password',
              labelText: 'Password'
            }
          ],
          buttonText: 'Join Formulary!',
          buttonPath: '/signin',
          question: 'Already have an account? ',
          linkTo: '/signin',
          linkText: 'Sign In here!'
        },
        signIn: {
          inputs: [
            {
              inputType: 'email',
              labelText: 'Email'
            },
            {
              inputType: 'password',
              labelText: 'Password'
            }
          ],
          buttonText: 'Sign In!',
          buttonPath: '/user',
          question: 'Don\'t have an account? ',
          linkTo: '/register',
          linkText: 'Join Formulary!'
        }
      },
    };
  }

  render() {
    return (
      <Container>
        <Header loggedIn={this.state.loggedIn} userName={this.state.userDetails.userName} />
        <SwitchWrap>
          <Switch>
            <Route exact path='/' render={() => (
              this.state.loggedIn ? (
                <UserProfile />
              ) : (
                <Redirect to='/signin' />
              )
            )} />
            <Route path='/signin' render={() => <AccountForm formDetails={this.state.formDetails.signIn} />} />
            <Route path='/register' render={() => <AccountForm formDetails={this.state.formDetails.register} />} />
            <Route path='/clients' render={() => <DetailsList listType='Clients' listItems={this.state.clientsById} />} />
            <Route path='/clientdetails' component={ClientDetails} />
            <Route path='/user' render={() => <UserProfile userDetails={this.state.userDetails} />} />
            <Route component={Error404} />
          </Switch>
        </SwitchWrap>
      </Container>
    );
  }
}
export default Body;
