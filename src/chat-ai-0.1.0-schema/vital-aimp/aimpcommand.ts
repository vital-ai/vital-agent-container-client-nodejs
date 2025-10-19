import { AIMPCommandMessage } from './aimpcommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPCommand
 */
export class AIMPCommand extends AIMPCommandMessage {
  public aIMPCommandType?: string;
  public aIMPCommandOperationType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPCommand';
  }

  /**
   * Get property definitions for AIMPCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPCommandType',
        tsPropertyName: 'aIMPCommandType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPCommandOperationType',
        tsPropertyName: 'aIMPCommandOperationType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
