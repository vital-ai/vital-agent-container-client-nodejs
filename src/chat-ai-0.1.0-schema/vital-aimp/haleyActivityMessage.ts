import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyActivityMessage
 */
export class HaleyActivityMessage extends HaleyMessage {
  public activityComplete?: boolean;
  public activityCanceled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyActivityMessage';
  }

  /**
   * Get property definitions for HaleyActivityMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityComplete',
        tsPropertyName: 'activityComplete',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCanceled',
        tsPropertyName: 'activityCanceled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
