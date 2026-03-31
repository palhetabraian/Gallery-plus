import Container from '../components/container';
import PhotosList from '../contexts/photos/components/photos-list';

export default function PageHome() {
    return (
        <Container>
            <PhotosList
                photos={[
                    {
                        id: '123',
                        title: 'Ola mundo',
                        imageId: 'portrait-tower.png',
                        albums: [
                            { id: '321', title: 'album 1' },
                            { id: '123', title: 'album 2' },
                            { id: '456', title: 'album 3' },
                        ],
                    },
                    {
                        id: '321',
                        title: 'Ola mundo',
                        imageId: 'portrait-tower.png',
                        albums: [
                            { id: '321', title: 'album 1' },
                            { id: '123', title: 'album 2' },
                            { id: '456', title: 'album 3' },
                        ],
                    },
                ]}
            />
        </Container>
    );
}
