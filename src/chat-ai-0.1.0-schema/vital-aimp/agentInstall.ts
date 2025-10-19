import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstall
 */
export class AgentInstall extends VITAL_Node {
  public agentInstallTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentInstall';
  }

  /**
   * Get property definitions for AgentInstall
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstallTypeURI',
        tsPropertyName: 'agentInstallTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
