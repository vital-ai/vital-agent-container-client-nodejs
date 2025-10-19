import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage
 */
export class GetObjectResultsMessage extends AIMPMessage {
  public includeDependentObjects?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage';
  }

  /**
   * Get property definitions for GetObjectResultsMessage
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
