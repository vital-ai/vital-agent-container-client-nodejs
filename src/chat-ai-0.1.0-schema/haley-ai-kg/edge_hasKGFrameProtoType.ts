import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrameProtoType
 */
export class Edge_hasKGFrameProtoType extends Edge_hasKGEdge {
  public kGEntityTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrameProtoType';
  }

  /**
   * Get property definitions for Edge_hasKGFrameProtoType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeExternIdentifier',
        tsPropertyName: 'kGEntityTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGFrameProtoType
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGFrameProtoType';
  }
}
