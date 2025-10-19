import { HaleyChatAgentRequest } from './haleyChatAgentRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetAgentInstanceDeploymentAgentRequest
 */
export class GetAgentInstanceDeploymentAgentRequest extends HaleyChatAgentRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetAgentInstanceDeploymentAgentRequest';
  }

  /**
   * Get property definitions for GetAgentInstanceDeploymentAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
