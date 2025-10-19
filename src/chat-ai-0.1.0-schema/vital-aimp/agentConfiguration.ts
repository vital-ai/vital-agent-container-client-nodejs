import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentConfiguration
 */
export class AgentConfiguration extends VITAL_Node {
  public agentConfigurationIdentifier?: string;
  public agentConfigurationVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentConfiguration';
  }

  /**
   * Get property definitions for AgentConfiguration
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentConfigurationIdentifier',
        tsPropertyName: 'agentConfigurationIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentConfigurationVersion',
        tsPropertyName: 'agentConfigurationVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
