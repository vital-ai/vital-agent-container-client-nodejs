import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Device
 */
export class Device extends Card {
  public channels?: string[];
  public imageURL?: string;
  public lastActiveDate?: string | Date;
  public color?: string;
  public deviceType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Device';
  }

  /**
   * Get property definitions for Device
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannels',
        tsPropertyName: 'channels',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastActiveDate',
        tsPropertyName: 'lastActiveDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColor',
        tsPropertyName: 'color',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceType',
        tsPropertyName: 'deviceType',
        type: 'string',
        required: false
      }
    ];
  }


}
