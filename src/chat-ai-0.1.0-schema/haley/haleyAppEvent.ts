import { AIMPEvent } from '../vital-aimp/aimpevent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAppEvent
 */
export class HaleyAppEvent extends AIMPEvent {
  public eventType?: string;
  public eventDetails?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAppEvent';
  }

  /**
   * Get property definitions for HaleyAppEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventType',
        tsPropertyName: 'eventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEventDetails',
        tsPropertyName: 'eventDetails',
        type: 'string',
        required: false
      }
    ];
  }


}
