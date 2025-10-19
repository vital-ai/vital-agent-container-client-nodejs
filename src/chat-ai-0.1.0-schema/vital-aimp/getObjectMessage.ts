import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GetObjectMessage
 */
export class GetObjectMessage extends CommandMessage {
  public includeDependentObjects?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GetObjectMessage';
  }

  /**
   * Get property definitions for GetObjectMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects',
        tsPropertyName: 'includeDependentObjects',
        type: 'boolean',
        required: false
      }
    ];
  }


}
