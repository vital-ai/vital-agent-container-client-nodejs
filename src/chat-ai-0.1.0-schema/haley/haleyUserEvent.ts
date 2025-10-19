import { HaleyAppEvent } from './haleyAppEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUserEvent
 */
export class HaleyUserEvent extends HaleyAppEvent {
  declare public loginURI?: string;
  public loginUsername?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyUserEvent';
  }

  /**
   * Get property definitions for HaleyUserEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasLoginUsername',
        tsPropertyName: 'loginUsername',
        type: 'string',
        required: false
      }
    ];
  }


}
