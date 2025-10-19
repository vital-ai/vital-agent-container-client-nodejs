import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge
 */
export class Edge_hasKGEdge extends VITAL_PeerEdge {
  public kGTenantIdentifier?: string;
  public kGIndexStatusURI?: string;
  public kGModelVersion?: string;
  public kGDataHash?: string;
  public kGValidTypeURI?: string;
  public edgeName?: string;
  public kGJSON?: string;
  public kGGraphAssertionDateTime?: string | Date;
  public kGraphDescription?: string;
  public kGIdentifier?: string;
  public kGRefEdgeURI?: string;
  public kGVersion?: string;
  public kGIndexDateTime?: string | Date;
  public kGChatInteractionGraphURI?: string;
  public kGVisualStyleJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge';
  }

  /**
   * Get property definitions for Edge_hasKGEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier',
        tsPropertyName: 'kGTenantIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI',
        tsPropertyName: 'kGIndexStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion',
        tsPropertyName: 'kGModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDataHash',
        tsPropertyName: 'kGDataHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI',
        tsPropertyName: 'kGValidTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasEdgeName',
        tsPropertyName: 'edgeName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGJSON',
        tsPropertyName: 'kGJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime',
        tsPropertyName: 'kGGraphAssertionDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription',
        tsPropertyName: 'kGraphDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifier',
        tsPropertyName: 'kGIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRefEdgeURI',
        tsPropertyName: 'kGRefEdgeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVersion',
        tsPropertyName: 'kGVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime',
        tsPropertyName: 'kGIndexDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionGraphURI',
        tsPropertyName: 'kGChatInteractionGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVisualStyleJSON',
        tsPropertyName: 'kGVisualStyleJSON',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge';
  }
}
