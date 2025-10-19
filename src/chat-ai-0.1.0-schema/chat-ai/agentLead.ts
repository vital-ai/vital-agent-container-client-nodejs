import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AgentLead
 */
export class AgentLead extends VITAL_Node {
  public agentInstallURI?: string;
  public agentLeadStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AgentLead';
  }

  /**
   * Get property definitions for AgentLead
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentInstallURI',
        tsPropertyName: 'agentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentLeadStatusURI',
        tsPropertyName: 'agentLeadStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
