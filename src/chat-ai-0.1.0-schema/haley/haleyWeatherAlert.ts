import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherAlert
 */
export class HaleyWeatherAlert extends VITAL_Node {
  public weatherAlertDescription?: string;
  public weatherAlertHeadline?: string;
  public weatherAlertEvent?: string;
  public weatherAlertExpiration?: string | Date;
  public haleyWeatherAlertCertaintyURI?: string;
  public haleyWeatherAlertSeverityURI?: string;
  public weatherAlertSender?: string;
  public weatherAlertOnset?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyWeatherAlert';
  }

  /**
   * Get property definitions for HaleyWeatherAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertDescription',
        tsPropertyName: 'weatherAlertDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertHeadline',
        tsPropertyName: 'weatherAlertHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertEvent',
        tsPropertyName: 'weatherAlertEvent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertExpiration',
        tsPropertyName: 'weatherAlertExpiration',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherAlertCertaintyURI',
        tsPropertyName: 'haleyWeatherAlertCertaintyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherAlertSeverityURI',
        tsPropertyName: 'haleyWeatherAlertSeverityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertSender',
        tsPropertyName: 'weatherAlertSender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertOnset',
        tsPropertyName: 'weatherAlertOnset',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
