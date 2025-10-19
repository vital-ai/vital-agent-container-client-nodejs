import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentDatascriptCallResponse
 */
export class AgentDatascriptCallResponse extends VITAL_Node {
  public offset?: number;
  public totalResults?: number;
  public statusMessage?: string;
  public status?: string;
  public id?: string;
  public limit?: number;
  public accountURI?: string;
  public sourceRequestURI?: string;
  public scriptName?: string;
  public datascriptScope?: string;
  public requestURI?: string;
  public bindingNames?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentDatascriptCallResponse';
  }

  /**
   * Get property definitions for AgentDatascriptCallResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOffset',
        tsPropertyName: 'offset',
        type: 'number',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLimit',
        tsPropertyName: 'limit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceRequestURI',
        tsPropertyName: 'sourceRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScriptName',
        tsPropertyName: 'scriptName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDatascriptScope',
        tsPropertyName: 'datascriptScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBindingNames',
        tsPropertyName: 'bindingNames',
        type: 'string[]',
        required: false
      }
    ];
  }


}
