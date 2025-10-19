import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTeam
 */
export class KGTeam extends KGNode {
  public kGTeamType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTeam';
  }

  /**
   * Get property definitions for KGTeam
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTeamType',
        tsPropertyName: 'kGTeamType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
