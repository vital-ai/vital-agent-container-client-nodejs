import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest
 */
export class QueryChatInteractionRequest extends HaleyChatCommand {
  public chatQueryLimit?: number;
  public chatQuerySortDirectionURI?: string;
  public chatQuerySortProperty?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public chatQueryOffset?: number;
  public chatQueryFilter?: string;
  public haleyChatInteractionTypeURI?: string;
  public haleyChatInteractionScopeLoginURI?: string;
  public haleyChatInteractionScopeChannelURI?: string;
  public haleyChatInteractionScopeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryChatInteractionRequest';
  }

  /**
   * Get property definitions for QueryChatInteractionRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryLimit',
        tsPropertyName: 'chatQueryLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQuerySortDirectionURI',
        tsPropertyName: 'chatQuerySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQuerySortProperty',
        tsPropertyName: 'chatQuerySortProperty',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI',
        tsPropertyName: 'haleyChatInteractionModelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryOffset',
        tsPropertyName: 'chatQueryOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatQueryFilter',
        tsPropertyName: 'chatQueryFilter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI',
        tsPropertyName: 'haleyChatInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeLoginURI',
        tsPropertyName: 'haleyChatInteractionScopeLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI',
        tsPropertyName: 'haleyChatInteractionScopeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI',
        tsPropertyName: 'haleyChatInteractionScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
