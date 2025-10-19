import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInMessage
 */
export class HaleyLinkedInMessage extends HaleyMessage {
  public linkedInJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyLinkedInMessage';
  }

  /**
   * Get property definitions for HaleyLinkedInMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
