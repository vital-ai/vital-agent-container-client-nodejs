import { AIMPCommandMessage } from './aimpcommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPIntent
 */
export class AIMPIntent extends AIMPCommandMessage {
  public aIMPIntent?: string;
  public aIMPIntentType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPIntent';
  }

  /**
   * Get property definitions for AIMPIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPIntent',
        tsPropertyName: 'aIMPIntent',
        type: 'string',
        required: false
      },
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
