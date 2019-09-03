import React from "react";
import "./Styles.css";
import ItemImage from './ItemImage'

export default class Gallery extends React.Component {
    state = { galleryPhotos: [], modalOpened: false, image: "" };

    componentDidMount = () => 
    {
        const galleryPhotos = [{
            url: "http://static.palmeiras.com.br/content/public/upload/imagem/times/imagem_20_original.png",
            description: "Palmeiras Tem Mundial..."
        },
        {
            url: "https://s.glbimg.com/es/sde/f/equipes/2018/03/10/corinthians.svg",
            description: "Corinthians"
        }
            , {
            url: "https://assets.xtechcommerce.com/uploads/images/medium/85101aecd507edc67c02b722e8788713.jpg",
            description: "Flamengo"
        }
        ];
        this.setState({ galleryPhotos: galleryPhotos });
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { galleryPhotos, ...newGalleryPhotos } = this.state;

        this.setState({
            galleryPhotos: this.state.galleryPhotos.concat([newGalleryPhotos]),
            url: "",
            description: ""
        });
    };

    handleDismiss = () => {
        this.setState({ modalOpened: false });
    };

    render() {
        const { url = "", description = "" } = this.state;
        return (
            <div>
                <form>
                    <div className="field">
                        <div className="label">
                            <label>Image Url:</label>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                name="url"
                                value={url}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="label">
                            <label>Image Description:</label>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                name="description"
                                value={description}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <button onClick={this.handleSubmit}>Adicionar</button>
                </form>
                <ul>
                    {this.state.galleryPhotos.map((photos, index) =>
                        <li key={index}>
                            <ItemImage key={index} url={photos.url} description={photos.description} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
