import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#WeatherForecast
 */
export class WeatherForecast extends Card {
  public address?: string;
  public longitude?: number;
  public weatherJSONResponse?: string;
  public latitude?: number;
  public searchString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#WeatherForecast';
  }

  /**
   * Get property definitions for WeatherForecast
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongitude',
        tsPropertyName: 'longitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse',
        tsPropertyName: 'weatherJSONResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLatitude',
        tsPropertyName: 'latitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSearchString',
        tsPropertyName: 'searchString',
        type: 'string',
        required: false
      }
    ];
  }


}
