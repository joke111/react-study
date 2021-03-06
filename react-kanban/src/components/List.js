import React from 'react';
import Card from './Card';


class List extends React.Component {
    render() {
        var cards = this.props.cards.map((card) => {
            return <Card key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        color={card.color}
                        tasks={card.tasks}
                        taskCallbacks={this.props.taskCallbacks}
                    />
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}

List.propTypes = {
    title: React.PropTypes.string.isRequired,
    cards: React.PropTypes.arrayOf(React.PropTypes.object),
    taskCallbacks: React.PropTypes.object
};


export default List;