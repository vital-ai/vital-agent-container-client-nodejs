import { ListFact } from './listFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ResultListFact
 */
export class ResultListFact extends ListFact {
  public limit?: number;
  public bindingNames?: string[];
  public totalResults?: number;
  public statusMessage?: string;
  public status?: string;
  public offset?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ResultListFact';
  }

  /**
   * Get property definitions for ResultListFact
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBindingNames',
        tsPropertyName: 'bindingNames',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalResults',
        tsPropertyName: 'totalResults',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusMessage',
        tsPropertyName: 'statusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
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
