import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SearchRequestMessage
 */
export class SearchRequestMessage extends CommandMessage {
  public limit?: number;
  public queryString?: string;
  public offset?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SearchRequestMessage';
  }

  /**
   * Get property definitions for SearchRequestMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLimit',
        tsPropertyName: 'limit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasQueryString',
        tsPropertyName: 'queryString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOffset',
        tsPropertyName: 'offset',
        type: 'number',
        required: false
      }
    ];
  }


}
