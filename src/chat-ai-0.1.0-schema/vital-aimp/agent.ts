import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Agent
 */
export class Agent extends VITAL_Node {
  public agentStatusTypeURI?: string;
  public agentTypeURI?: string;
  public agentDistributionTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Agent';
  }

  /**
   * Get property definitions for Agent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentStatusTypeURI',
        tsPropertyName: 'agentStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentTypeURI',
        tsPropertyName: 'agentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentDistributionTypeURI',
        tsPropertyName: 'agentDistributionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
