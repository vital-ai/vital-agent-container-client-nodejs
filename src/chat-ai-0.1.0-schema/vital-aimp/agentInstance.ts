import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstance
 */
export class AgentInstance extends VITAL_Node {
  public agentInstanceIdentifier?: string;
  public agentInstanceTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstance';
  }

  /**
   * Get property definitions for AgentInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceIdentifier',
        tsPropertyName: 'agentInstanceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceTypeURI',
        tsPropertyName: 'agentInstanceTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
