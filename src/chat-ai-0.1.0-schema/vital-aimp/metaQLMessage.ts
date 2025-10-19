import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MetaQLMessage
 */
export class MetaQLMessage extends CommandMessage {
  public queryString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MetaQLMessage';
  }

  /**
   * Get property definitions for MetaQLMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasQueryString',
        tsPropertyName: 'queryString',
        type: 'string',
        required: false
      }
    ];
  }


}
