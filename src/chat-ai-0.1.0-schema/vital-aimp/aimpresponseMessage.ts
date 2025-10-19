import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPResponseMessage
 */
export class AIMPResponseMessage extends HaleyMessage {
  public aIMPIntentType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPResponseMessage';
  }

  /**
   * Get property definitions for AIMPResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPIntentType',
        tsPropertyName: 'aIMPIntentType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
