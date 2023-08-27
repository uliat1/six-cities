import {useState} from 'react';
import Layout from '../../components/layout/layout';
import CitiesList from '../../components/cities-list/cities-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import {Offer} from '../../types/offer';
import Map from '../../components/map/map';
import {PlaceClasses} from '../../const';
import {useAppSelector} from '../../hooks';
import { getSelectedCity } from '../../store/offer-process/selector';
import { filterOffers } from '../../store/offer-data-process/selector';

function WelcomeScreen(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );

  const selectedCity = useAppSelector(getSelectedCity);

  const offersByCity = useAppSelector(filterOffers);

  const onPlaceCardMouseOver = (id: number) => {
    const currentOffer = offersByCity && offersByCity.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page page--gray page--main'>
      <Layout />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CitiesList />
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersByCity && offersByCity.length} places to stay in {selectedCity}</b>
              <SortingOptions />
              <OfferCardList
                offers={offersByCity}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                placeListClass={PlaceClasses.MainPlacesListClass}
                placeCardClass={PlaceClasses.MainPlaceCardClass}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  offers={offersByCity}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}

export default WelcomeScreen;
