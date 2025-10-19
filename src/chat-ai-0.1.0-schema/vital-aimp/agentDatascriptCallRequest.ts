import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentDatascriptCallRequest
 */
export class AgentDatascriptCallRequest extends VITAL_Node {
  public json?: string;
  public scriptName?: string;
  public datascriptScope?: string;
  public accountURI?: string;
  public id?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentDatascriptCallRequest';
  }

  /**
   * Get property definitions for AgentDatascriptCallRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJson',
        tsPropertyName: 'json',
        type: 'string',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      }
    ];
  }


}
