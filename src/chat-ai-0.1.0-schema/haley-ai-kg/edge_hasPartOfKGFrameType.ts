import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasPartOfKGFrameType
 */
export class Edge_hasPartOfKGFrameType extends Edge_hasKGEdge {
  public kGFrameTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasPartOfKGFrameType';
  }

  /**
   * Get property definitions for Edge_hasPartOfKGFrameType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeExternIdentifier',
        tsPropertyName: 'kGFrameTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPartOfKGFrameType
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasPartOfKGFrameType';
  }
}
