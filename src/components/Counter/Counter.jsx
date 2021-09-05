import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import StatisticsTotal from '../StatisticsTotal/StatisticsTotal';

class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    feedback = event => {
        const button = event.target.name;
        
        if (button === 'Good') {
            this.setState(prevState => ({ good: prevState.good + 1 }));
        } else if (button === 'Neutral') {
            this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        } else {
            this.setState(prevState => ({ bad: prevState.bad + 1 }));
        }
    };
    countTotal = () => {
        const totalReviews = this.state.good + this.state.neutral + this.state.bad;
        return totalReviews;
    };
    countPositive = () => {
        const positive = this.state.good;
        const totalReviews = this.state.good + this.state.neutral + this.state.bad;
        const positivePersent = Math.round((positive / totalReviews) * 100);
        return positivePersent;
    };
 
    render() {
        return (
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions onClick={this.feedback} />
                </Section>

                {this.countTotal() > 0 ? (
                    <div>
                        <Section title={'Reviews statistics'}>
                            <Statistics
                                reviewsGood={this.state.good}
                                reviewsNeutral={this.state.neutral}
                                reviewsBad={this.state.bad}
                            />
                        </Section>
                        <Section title={'Reviews total'}>
                            <StatisticsTotal
                                totalReviews={this.countTotal()}
                                positiveReviews={this.countPositive()}
                            />
                        </Section>
                    </div>
                ) : (
                        <div>
                            <Section title={'Reviews Statistics'}>
                                <Notification message="No feedback given yet"/>
                            </Section>
                        </div>
                )}
            </div>
        );
    }
}
    
export default Counter;