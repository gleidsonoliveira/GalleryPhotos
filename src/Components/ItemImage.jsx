import React, { Component } from 'react';
import Modal from "./Modal";

export default class ItemImage extends Component {
    state = { key: 0, url: "" }


    handleOpen = obj => {
        this.setState({ modalOpened: true, image: this.state.image, description: "" });
    };

    handleDismiss = () => {
        this.setState({ modalOpened: false });
    };

    render() {
        return (
            <div>
                <div>
                    <h4>
                        {this.props.description}
                    </h4>
                </div>
                <img key={this.props.key} src={this.props.url} alt="Imagem" onClick={this.handleOpen} />

                <Modal key={this.props.key}
                    opened={this.state.modalOpened}
                    handleDismiss={this.handleDismiss}
                    title={this.props.description}
                    image={this.props.url}
                />
            </div>
        )
    }
}