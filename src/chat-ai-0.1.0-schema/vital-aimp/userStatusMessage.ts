import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserStatusMessage
 */
export class UserStatusMessage extends HaleyMessage {
  public status?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserStatusMessage';
  }

  /**
   * Get property definitions for UserStatusMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      }
    ];
  }


}
